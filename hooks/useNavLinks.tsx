import useTranslation from 'next-translate/useTranslation';
export interface Router {
  href: string;
  label: string;
}
const useNavLinks = (): Router[] => {
  const { t, lang } = useTranslation('common');
  const router: Router[] = [
    {
      href: '/',
      label: t('home'),
    },
    {
      href: '/game',
      label: t('game'),
    },
    {
      href: '/score',
      label: t('score'),
    },
  ];
  return router;
};

export default useNavLinks;
