import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import Button from '@/components/button';
import Link from 'next/link';
import Card from '@/components/card';
import { Icons as IconsType } from '@/components/icons/_model';
import Icons from '@/components/icons/icons';
interface List {
  label: string;
  icon: IconsType;
}
export const Header: React.FC = ({}) => {
  const { t, lang } = useTranslation('home');
  const list: List[] = [
    {
      label: t('list-1'),
      icon: 'Die1',
    },
    {
      label: t('list-2'),
      icon: 'Die2',
    },
    {
      label: t('list-3'),
      icon: 'Die3',
    },
    {
      label: t('list-4'),
      icon: 'Die4',
    },
    {
      label: t('list-5'),
      icon: 'Die5',
    },
    {
      label: t('list-6'),
      icon: 'Die6',
    },
  ];
  return (
    <header className="py-24">
      <div className="container">
        <div className="row grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col gap-10 ">
            <Image src="/header.png" alt="" width={500} height={500} />
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-6xl text-border-3 text-primary">{t('title')}</h1>
              <p className="font-normal text-base text-black leading-[normal]">{t('description')}</p>
            </div>
            <Link href="/game" className="w-auto" locale={lang}>
              <Button label={t('lets-go')} icon="Right" />
            </Link>
          </div>
          <Card title={t('card-title')} className="mt-8 md:mt-0">
            {list.map(i => (
              <div className="grid grid-cols-[auto_1fr] gap-5 items-center p-5">
                <Icons name={i.icon} width={74} height={74} />
                <p className="text-base font-normal leading-[normal]">{i.label}</p>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </header>
  );
};
