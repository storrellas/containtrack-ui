import Image from "next/image";

import Link from "next/link";



export default function Login() {
  return <main className="vw-100 vh-100 d-flex justify-content-center align-items-center" style={{ background: "#212844"}}>
    <div className="w-50 d-flex">
      <div className="w-50">  
        <div className="d-flex justify-content-center align-items-center h-100">
          <img src="/assets/logo.png"  alt="ContainTrack Logo"  className="mb-4"/>
        </div>
      </div>
      <div className="w-50 bg-white rounded-3 shadow p-3 ps-4 pe-4">
        <div className="fs-2 fw-bold text-center text-muted">ContainTrack</div>
        <div className="mt-3">
          <label>Username</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mt-3">
          <label>Password</label>
          <input type="password" className="form-control" />
        </div>
        <div className="d-grid mt-4">
          <Link href="/dashboard" className="btn btn-primary btn-lg" style={{ background: '#212844', border: 0}}>Login</Link>
        </div>
      </div>
    </div>

  </main>;
}
