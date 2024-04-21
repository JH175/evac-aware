export default function Alerts({ alerts }: { alerts: any }) {
  return (
    <div className="flex flex-col gap-5 w-[50vw] items-center">
      <h2>Active Alerts</h2>
      {alerts.map((alert: any) => (
        <div key={alert.title}>
          <p className="uppercase text-red-500">{alert.title}</p>
          <p>{alert.content}</p>
        </div>
      ))}
    </div>
  );
}
