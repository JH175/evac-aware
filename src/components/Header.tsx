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

export default function Header() {
  return (
    <div className="p-10 bg-[#00000099] flex justify-between">
      <div>
        <h1 className="text-2xl">Evac Aware</h1>
      </div>
      <div>
        <Modal trigger={"My Active Alerts"}>
          <Alerts alerts={mockAlerts} />
        </Modal>
      </div>
    </div>
  );
}
