import Image from 'next/image';

export default function Devices() {
  const devices = [
    {
      id: 1,
      name: "Pro VR Headset",
      image: "/ellipse-19--2--1.png",
      description: "Our flagship VR headset with advanced features and superior comfort.",
      specs: [
        "4K resolution per eye",
        "120Hz refresh rate",
        "Wireless capability",
        "6 hours battery life"
      ]
    },
    {
      id: 2,
      name: "VR Controllers",
      image: "/group-28.png",
      description: "Precision controllers with haptic feedback for immersive experiences.",
      specs: [
        "Haptic feedback",
        "6-DOF tracking",
        "Rechargeable battery",
        "Low latency connection"
      ]
    }
  ];

  return (
    <div className="min-vh-100 bg-dark text-light py-5">
      <div className="container">
        <h1 className="text-center mb-5">Our Devices</h1>
        <div className="row">
          {devices.map(device => (
            <div key={device.id} className="col-md-6 mb-4">
              <div className="card bg-dark border border-light h-100">
                <div className="card-body">
                  <div className="text-center mb-4">
                    <Image
                      src={device.image}
                      alt={device.name}
                      width={300}
                      height={200}
                      className="img-fluid"
                    />
                  </div>
                  <h3 className="card-title">{device.name}</h3>
                  <p className="card-text">{device.description}</p>
                  <h5 className="mt-4">Specifications:</h5>
                  <ul>
                    {device.specs.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}