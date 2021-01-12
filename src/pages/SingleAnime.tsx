import { IonContent, IonHeader, IonPage, IonSpinner, IonTitle, IonToolbar } from "@ionic/react";
import React, { FC, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import AnimeDetails from "../components/AnimeDetails";
import { Anime, ApiResponse, Episode } from "../models";

interface IParams {
  id: string,
}

const SingleAnime: FC<RouteComponentProps<IParams>> = ({ match }) => {
  // Extrait l'ID demandé dans l'URL des informations du routeur
  const id = match.params.id;

  // Retient l'état actuel de l'animé demandé
  const [anime, setAnime] = useState<Anime | null>(null);

  // Déclenche une action à chaque changement d'ID dans l'URL
  useEffect(
    () => {
      // Crée une fonction asynchrone qui permet d'aller récupérer les données
      const fetchData = async () => {
        // Attend d'avoir reçu les données de l'animé demandé
        const animeJson: ApiResponse<Anime> = await
          fetch(`https://kitsu.io/api/edge/anime/${id}`)
          .then( response => response.json() );
        // Range les données de l'animé dans un état
        const animeData = animeJson.data;
        setAnime(animeData);

        // Si l'animé reçu existe
        if (animeData !== null) {
          // Attend d'avoir reçu les données des épisodes associés à l'animé
          const episodesJson: ApiResponse<Episode[]> = await
            fetch(animeData.relationships.episodes.links.related)
            .then( response => response.json() );
          // Construit un nouvel objet correspondant à l'animé
          // avec la liste des épisodes associés en plus
          const updatedAnime = Object.assign({}, animeData);
          updatedAnime.relationships.episodes.data = episodesJson.data;
          // Range ce nouvel objet dans un état
          setAnime(updatedAnime);
        }
      }

      // Appelle le fonction asynchrone qui vient juste d'être créée
      fetchData();
    },
    // Précise que l'effet doit se répéter à chaque changement dans la variable id
    [id]
  );

  // Tant que les données de l'animé ne sont pas disponibles, affiche une icône de chargement
  if (anime === null) {
    return <IonSpinner />;
  }

  // Dès que les données de l'animé sont disponibles, bascule vers l'affichage normal
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <AnimeDetails anime={anime} />
      </IonContent>
    </IonPage>
  );
}

export default SingleAnime;
