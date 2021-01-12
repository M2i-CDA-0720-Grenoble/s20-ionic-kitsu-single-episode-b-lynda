import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonList } from "@ionic/react";
import React, { FC } from "react";
import { Anime } from "../models";

interface AnimeDetailsProps {
  anime: Anime,
}

const AnimeDetails: FC<AnimeDetailsProps> = ({ anime }) => {
  let coverImage = null;
  if (anime.attributes.coverImage) {
    coverImage = <img src={anime.attributes.coverImage.tiny} alt={`Cover for ${anime.attributes.canonicalTitle}`} />;
  }

  let posterImage = null;
  if (anime.attributes.posterImage) {
    posterImage = <img src={anime.attributes.posterImage.small} alt={`Poster for ${anime.attributes.canonicalTitle}`} />;
  }

  return (
    <IonCard>
      {coverImage}

      <IonCardHeader>
        <IonCardTitle>
          {anime.attributes.canonicalTitle}
        </IonCardTitle>
        {posterImage}
      </IonCardHeader>

      <IonCardContent>
        {anime.attributes.synopsis}
      </IonCardContent>

      <IonCardHeader>
        <IonCardTitle>
          List of episodes
        </IonCardTitle>
      </IonCardHeader>
      <IonList>
        {
          typeof anime.relationships.episodes.data === 'undefined' ? null :
          anime.relationships.episodes.data.map(
            episode => 
              <IonItem>
                Episode {episode.attributes.number} - {episode.attributes.canonicalTitle}
              </IonItem>
          )
        }
      </IonList>
    </IonCard>
  );
}

export default AnimeDetails;
