import axios from "axios"
import { useState } from "react";


export default function Home() {

  const [mes, setMes] = useState<string>()
  const runPythonScript = async () => {
    try {
      await axios.post('/api/indexs')
      setMes("ตกใจไหมสัส")
        }catch  {

    }
  };





  return (
    <>
      <div className="bg-black w-screen h-screen flex flex-col justify-center  items-center">
        <div className=" text-white flex flex-col">
          <label htmlFor="kuy">ลองใส่ดูไม่เกิดอะไรขี้นหลอก</label>
          <div className="text-black">
            <input type="text" className="text-balck"  onChange={runPythonScript}  />
          </div>
          
          <div>{mes}</div>
        </div>
      </div>
    </>
  )
}
