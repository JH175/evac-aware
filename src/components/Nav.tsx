import Alerts from "./alerts/Alerts";
import Modal from "./ui/Modal";

const mockAlerts = [
  {
    title: "Tropical Storm System",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consequuntur. Maxime dicta praesentium saepe nobis reiciendis? Eum, consequatur, doloribus eveniet voluptatem, nobis dolores maiores ab amet a minus dolorem beatae!",
  },
  {
    title: "High Winds",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, consequuntur. Maxime dicta praesentium saepe nobis reiciendis? Eum, consequatur, doloribus eveniet voluptatem, nobis dolores maiores ab amet a minus dolorem beatae!",
  },
];

export default function Nav() {
  return (
    <div className="p-5 bg-[#000000dd] flex justify-between">
      <div>
        <h1 className="text-2xl">Evac Aware</h1>
      </div>
      <div className="flex flex-col items-center">
        <p>Savannah, GA 31322</p>
        <button>Change Location</button>
      </div>
      <div className="md:flex gap-5">
        <button>Evac Zones</button>
        <button>Evac Routes</button>
        <Modal trigger={"My Active Alerts"}>
          <Alerts alerts={mockAlerts} />
        </Modal>
      </div>
    </div>
  );
}
