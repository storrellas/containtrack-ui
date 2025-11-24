import Link from "next/link";

export default function Page() {
  return <main className="vw-100 vh-100 d-flex">
          <section className="vh-100 text-white" style={{ width: '250px', background: '#212844' }}>
            <div className="mx-auto text-center">
              <img src="/assets/logo.png" alt="ContainTrack Logo" className="img-fluid p-3 mx-auto" style={{ height: '100px'}} />
              <h2 className="fw-bold">ContainTrack</h2>
              <div>
                <Link href="/dashboard" className="d-block text-white text-decoration-none p-3">Dashboard</Link>
                <div className="d-block text-white text-decoration-none p-3">Containers</div>
                <div className="d-block text-white text-decoration-none p-3">Reports</div>
                <div className="d-block text-white text-decoration-none p-3">Settings</div>
              </div>
              
            </div>
          </section>
          
          <section className="flex-grow-1">
            <nav className="d-flex justify-content-end" style={{ background: '#f4f5f9', height: '60px' }}>
              <div className="d-flex align-items-center">
                Hello David!
              </div>
            </nav>
            <div className="p-3">
              <h2>Dashboard</h2>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Immat</th>
                    <th scope="col">Color</th>
                    <th scope="col">Serial Number</th>
                    <th scope="col">Type</th>
                    <th scope="col">Company</th>
                    <th scope="col">Creator</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Blue</td>
                    <td>12345</td>
                    <td>Trailer</td>
                    <td>Ederlog Multimodal</td>
                    <td>David Navarro</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Blue</td>
                    <td>12345</td>
                    <td>Trailer</td>
                    <td>Ederlog Multimodal</td>
                    <td>David Navarro</td>                 
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Blue</td>
                    <td>12345</td>
                    <td>Trailer</td>
                    <td>Ederlog Multimodal</td>
                    <td>David Navarro</td>
                  </tr>
                </tbody>
              </table>

            </div>

          </section>
        </main>
}