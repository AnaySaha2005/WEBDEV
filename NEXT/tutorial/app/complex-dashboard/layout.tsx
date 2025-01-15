//automatically gets all the slots present in this folder
export default function Dashboard({
  children,
  user,
  revenue,
  notification,
  login,
}: {
  children: React.ReactNode;
  user: React.ReactNode;
  revenue: React.ReactNode;
  notification: React.ReactNode;
  login: React.ReactNode;
}) {
  const islogged = false;
  return islogged ? (
    <>
      <h1>Complex DashBoard</h1>
      {children}
      {user}
      {revenue}
      {notification}
      <h1></h1>
    </>
  ) : (
    <>
     { login }
    </>
   
  );
}
