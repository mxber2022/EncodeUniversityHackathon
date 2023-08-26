"use client";
import { SSX } from "@spruceid/ssx";
import { useEffect, useState, useRef } from "react";
import "./myStyle.css";

var CryptoJS = require("crypto-js");
function encrypt(toEncrypt: any, enkey: any) 
{
    console.log("Encryption starting");
    console.log("Data to encrypt: ", toEncrypt);
    console.log("Password to encrypt: ", enkey);

    var encrypted = CryptoJS.AES.encrypt(JSON.stringify(toEncrypt), enkey).toString();
    console.log("encrypted", encrypted);

    return encrypted;
}


interface IKeplerStorageComponent {
  ssx: SSX
}

const KeplerStorageComponent = ({ ssx }: IKeplerStorageComponent) => {

  const [key, setKey] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const [contentList, setContentList] = useState<Array<string>>([]);
  const [viewingContent, setViewingContent] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getContentList();
  }, []);

  const getContentList = async () => {
    setLoading(true);
    let { data } = await ssx.storage.list();
    data = data.filter((d: string) => d.includes('/content/'))
    setContentList(data);
    setLoading(false);
  };

  const handlePostContent = async (key: string) => {
    if (!key) {
      alert('Invalid key');
      return;
    }
    if(enkey=="") {
      alert('no secret key provided');
      return;
    }
/*
    const store = [
      { "website" : website},
      { "username" : username },
      { "password" : password },
      { "notes" : notes }
    ]
 */

    const store = {
      "website" : website,
      "username" : username ,
      "password" : password,
      "notes" : notes 
    }

    const dataToStore = encrypt(store, enkey);


    const formatedKey = 'content/' + key.replace(/\ /g, '_');
    setLoading(true);
    await ssx.storage.put(formatedKey, dataToStore);
    setContentList((prevList) => [...prevList, `my-app/${formatedKey}`]);
    setKey('');
    setValue('');
    setLoading(false);
  };

  const handleGetContent = async (content: string) => {
    setLoading(true);
    const contentName = content.replace('my-app/', '')
    const { data } = await ssx.storage.get(contentName);
    setViewingContent(`${content}:\n${data}`);
    setLoading(false);
  };

  const handleDeleteContent = async (content: string) => {
    setLoading(true);
    const contentName = content.replace('my-app/', '')
    await ssx.storage.delete(contentName);
    setContentList((prevList) => prevList.filter((c) => c !== content));
    setLoading(false);
  };

  const [output, setOutput] = useState([])
  
  const [dwebsite, setDWebsite] = useState("")
  const [dpassword, setDPassword] = useState("")
  const [dusername, setDUsername] = useState("")
  const [dnotes, setDNotes] = useState("")

  const outp = useRef([])
  function decrypt() 
  {

    var bytes  = CryptoJS.AES.decrypt(cipher, decryptionKey);
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    console.log("decryptedData", decryptedData);

    
    outp.current = decryptedData;
    setOutput(outp.current);
    console.log("output ", outp.current);

    setDWebsite(decryptedData.website);
    setDPassword(decryptedData.password);
    setDUsername(decryptedData.username);
    setDNotes(decryptedData.notes);
  }

  const [website, setWebsite] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [notes, setNotes] = useState("")
  const [enkey, setEnkey] = useState("")
  const [cipher, setCipher] = useState("")
  const [decryptionKey, setDecryptionKey] = useState("")
  
 
  return (
    <div style={{ marginTop: 50 }}>
      <h2>Provide data to encrypt and store in Kepler</h2>
<div className="dataField">   
      <div className='website'>
        <label className='larger-label' htmlFor="username">Key </label>
        <input style={{ width: '250px', height: '30px' , marginRight: '10px'}} type="text" placeholder="Key" value={key} onChange={(e) => setKey(e.target.value)} disabled={loading} />
        <br />
      </div>




    {
      /* Password Fields */
    }
    <div className="field ">

      <div className='website distance'>
        <div>
          <label className='larger-label' htmlFor="username">Encryption </label>
        </div>
        <div style={{ paddingLeft:'10px'}}>
          <input style={{ width: '200px', height: '30px'}} className='prom'  type="text" placeholder="secret" onChange={(e) => setEnkey(e.target.value)} />
        </div>
      </div>

      <div className='website distance'>
        <div>
          <label className='larger-label' htmlFor="username">Website </label>
        </div>

        <div style={{ paddingLeft:'30px'}}>
          <input style={{ width: '200px', height: '30px'}} className='prom'  type="text" placeholder="example.com" onChange={(e) => setWebsite(e.target.value)} />
          </div>
      </div>

      <div className='username distance'>
        <div>
          <label className='larger-label' htmlFor="username">Username </label>
        </div>
        
        <div style={{ paddingLeft:'14px'}}>
          <input style={{ width: '200px', height: '30px' }} className='prom'  type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
        </div>
      </div>

      <div className='pass distance'>
        <div>
          <label className='larger-label' htmlFor="username">Password </label>
        </div>

        <div style={{ paddingLeft:'17px'}}>
          <input style={{ width: '200px', height: '30px' }} className='prom' type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>

      <div className='notes distance'>
        <div>
          <label className='larger-label' htmlFor="username">Notes </label>
        </div>
        
        <div style={{ paddingLeft:'44px'}}>
          <input style={{ width: '200px', height: '30px' }} className='prom' type="text" placeholder="Add notes" onChange={(e) => setNotes(e.target.value)} />
        </div>
      </div>

      <div className='notes distance'>
        <button style={{ width: '200px', height: '40px' , marginRight: '10px', fontSize:'15px'}}  onClick={() => handlePostContent(key)} disabled={loading} > <span> Submit </span> </button>
      </div>
    </div>


</div> 

      <p><b>My passwords</b></p>
      <table>
        <tbody>
          {contentList?.map((content, i) => <tr key={i}>
            <td>
              {content}
            </td>
            <td>
              <button
                onClick={() => handleGetContent(content)}
                disabled={loading}
              >
                <span>
                  GET
                </span>
              </button>
            </td>
            <td>
              <button
                onClick={() => handleDeleteContent(content)}
                disabled={loading}
              >
                <span>
                  DELETE
                </span>
              </button>
            </td>
          </tr>)}
        </tbody>
      </table>
      <pre style={{ marginTop: 25, marginBottom: 0 }}>
        {viewingContent}
      </pre>

      
      <div>



      <div>
        <h2>Decrypted data</h2>
        <input style={{ width: '200px', height: '30px' }} className='prom' type="text" placeholder="decryption key" onChange={(e) => setDecryptionKey(e.target.value)} />
        <input style={{ width: '200px', height: '30px', paddingLeft:'10px'}} className='prom' type="text" placeholder="cipher" onChange={(e) => setCipher(e.target.value)} />
        <button style={{ width: '200px', height: '35px' , marginRight: '10px', fontSize:'15px'}} onClick={decrypt}> Decrypt </button>
      </div>

      {
        outp.current? 
        <>
        <div className="out">
          <p >Website : </p>
          <p style={{ marginLeft: '10px', color: 'red'}}>{dwebsite}</p>
        </div>

        <div className="out">
          <p >Username : </p>
          <p style={{ marginLeft: '10px', color: 'red'}}>{dusername}</p>
        </div>

        <div className="out">
          <p>Password :</p>
          <p style={{ marginLeft: '10px', color: 'red'}}>{dpassword}</p>
        </div>

        <div className="out">
          <p>Notes : </p>
          <p style={{ marginLeft: '10px', color: 'red'}}>{dnotes}</p>
        </div>
        </>
    
      : 
      <></> 
        
      }
            
      




  </div>
    </div>

  );
}

export default KeplerStorageComponent;