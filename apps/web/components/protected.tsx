import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs';

export function Protected({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SignedIn>{children}</SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </>
    );
}
