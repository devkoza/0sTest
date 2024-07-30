'use client';

import useAuth from '@/hooks/use-auth';
import Button from '@/components/ui/button';
import { GoogleIcon } from '@/components/icons/google';
import { useModal } from '@/components/modals/context';

export default function SocialLogin() {
  const { closeModal } = useModal();
  const { authorize } = useAuth();

  const handleSocialLogin = () => {
    authorize();
    closeModal();
  };

  return (
    <>
    <div className="flex items-start gap-3 grid-cols-1">
      <Button
        onClick={handleSocialLogin}
        type="button"
        variant="outline"
        size="xl"
        className="mb-3 w-full"
      >
        <GoogleIcon className="mr-5" />
        Sign up with Google
      </Button>

    </div>
      </>
  );
}
