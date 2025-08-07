import { Button } from '@/components/atoms/button';

export const Init = () => {
  return (
    <div className="container mx-auto px-2 pt-10 pb-20">
      <div className="relative overflow-hidden rounded-3xl">
        <img src="/images/bg-hero.jpg" alt="bg-hero" className="min-h-[400px] w-full bg-center object-cover" />
        <div className="absolute inset-0 bg-black/90"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-8 text-white">
          <img src="/images/logobanner.svg" alt="Logo" className="mb-4" />
          <h1 className="max-w-lg text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy
          </h1>
          <div className="flex gap-5">
            <Button variant="default" size="md" iconName="MoveRight">
              Tiktok
            </Button>
            <Button variant="default" size="md" iconName="Instagram">
              Instagram
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
