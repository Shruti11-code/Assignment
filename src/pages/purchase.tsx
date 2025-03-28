import { useRouter } from 'next/router';

export default function Purchase() {
  const router = useRouter();
  
  const handlePurchase = () => {
    // Add purchase logic here
    alert('Thank you for your purchase!');
    router.push('/');
  };

  return (
    <div className="min-vh-100 bg-dark text-light py-5">
      <div className="container">
        <h1 className="text-center mb-5">Get Your VR Headset</h1>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card bg-dark border border-light">
              <div className="card-body text-center">
                <h3 className="card-title">Basic Package</h3>
                <h2 className="card-subtitle mb-4">$299</h2>
                <ul className="list-unstyled mb-4">
                  <li>VR Headset</li>
                  <li>2 Controllers</li>
                  <li>Basic Games Package</li>
                </ul>
                <button className="btn btn-primary" onClick={handlePurchase}>Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-dark border border-primary">
              <div className="card-body text-center">
                <h3 className="card-title">Premium Package</h3>
                <h2 className="card-subtitle mb-4">$499</h2>
                <ul className="list-unstyled mb-4">
                  <li>Advanced VR Headset</li>
                  <li>2 Pro Controllers</li>
                  <li>Premium Games Package</li>
                  <li>Extended Warranty</li>
                </ul>
                <button className="btn btn-primary" onClick={handlePurchase}>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}