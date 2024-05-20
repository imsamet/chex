import { useSelector } from '@/hooks/useRedux';
import cn from 'classnames';

export const Loading: React.FC = () => {
  const { isLoading } = useSelector(state => state.game);
  return (
    <div
      className={cn(
        'fixed flex justify-center items-center w-full h-full top-0 left-0 bg-[#b3b3b394] z-50',
        isLoading ? 'visible' : 'hidden',
      )}
    >
      <div className="flex space-x-2 justify-center items-center h-screen">
        <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-8 w-8 bg-black rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};
