import { Button } from '@/components/atoms/button';
import { Icon } from '@/components/atoms/icon';

export default function Home() {
  return (
    <>
      <h1 className="text-primary">Hello, Next.js!</h1>
      asdasds
      <Icon name="AirVent" />
      <Button iconName="AirVent" variant="secondary">
        Hola
      </Button>
    </>
  );
}
