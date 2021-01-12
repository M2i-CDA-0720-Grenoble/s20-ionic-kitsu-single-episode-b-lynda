import { IonList, IonSpinner } from '@ionic/react';
import React, { FC } from 'react';
import { Anime } from '../models';
import AnimePreview from './AnimePreview';

interface AnimeListProps {
  animes: Anime[],
}

const AnimeList: FC<AnimeListProps> = ({ animes }) => {
  // Tant que la requête n'a pas répondu, afficher un loader
  if (animes.length === 0) {
    return <IonSpinner />;
  }

  // Sinon, basculer vers l'affichage normal
  return (
    <IonList>
      {
        animes.map(
          anime =>
            <AnimePreview anime={anime} />
        )
      }
    </IonList>
  );
};

export default AnimeList;
