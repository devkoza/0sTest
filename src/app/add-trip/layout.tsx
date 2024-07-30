import AddListingHeader from '@/components/header/add-listing';

export default function TripLayout({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <>
      <AddListingHeader />
      <main className="flex flex-grow flex-col">{children}</main>
    </>
  );
}
