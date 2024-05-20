import useTranslation from 'next-translate/useTranslation';
import { Icons as IconsType } from '@/components/icons/_model';
import { useEffect } from 'react';
import { useDispatch, useSelector } from '@/hooks/useRedux';
import getGame from '@/store/actions/game/getGame';
import { Lang } from '@/core/_model';
import { Translate } from 'next-translate';
interface List {
  label: string;
  icon: IconsType;
}
export const Game: React.FC = ({}) => {
  const { t, lang } = useTranslation('home') as { t: Translate; lang: Lang };
  const dispatch = useDispatch();
  const { level, game, time } = useSelector(state => state.game);
  useEffect(() => {
    !game && dispatch(getGame(lang));
  }, []);
  console.log(game);
  return (
    <header className="py-24">
      <div className="container">
        <div className="row grid-cols-1 md:grid-cols-2"></div>
      </div>
    </header>
  );
};
