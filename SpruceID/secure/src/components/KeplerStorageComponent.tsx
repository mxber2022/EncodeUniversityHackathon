"use client";
import { SSX } from "@spruceid/ssx";
import { useEffect, useState } from "react";
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

    const store = [
      { "website" : website},
      { "username" : username },
      { "password" : password },
      { "notes" : notes }
    ]

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

  function decrypt() 
  {

    var bytes  = CryptoJS.AES.decrypt(cipher, decryptionKey);
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    console.log("decryptedData", decryptedData);
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
        <input style={{ width: '300px', height: '40px' , marginRight: '10px'}} type="text" placeholder="Key" value={key} onChange={(e) => setKey(e.target.value)} disabled={loading} />
        <br />
      </div>




    {
      /* Password Fields */
    }
    <div className="field">
      <br />
      <label className='larger-label' htmlFor="username">Encryption </label>
      <input style={{ width: '200px', height: '30px'}} className='prom'  type="text" placeholder="secret" onChange={(e) => setEnkey(e.target.value)} />
      <br />

      <div className='website distance'>
          <label className='larger-label' htmlFor="username">Website </label>
          <input style={{ width: '200px', height: '30px'}} className='prom'  type="text" placeholder="example.com" onChange={(e) => setWebsite(e.target.value)} />
      </div>

      <div className='username distance'>
          <label className='larger-label' htmlFor="username">Username </label>
          <input style={{ width: '200px', height: '30px' }} className='prom'  type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
      </div>

      <div className='pass distance'>
          <label className='larger-label' htmlFor="username">Password </label>
          <input style={{ width: '200px', height: '30px' }} className='prom' type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
      </div>

      <div className='notes distance'>
          <label className='larger-label' htmlFor="username">Notes </label>
          <input style={{ width: '200px', height: '30px' }} className='prom' type="text" placeholder="Add notes" onChange={(e) => setNotes(e.target.value)} />
      </div>

      <div className='notes distance'>
        <button style={{ width: '200px', height: '40px' , marginRight: '10px'}}  onClick={() => handlePostContent(key)} disabled={loading} > <span> Submit </span> </button>
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

      <input style={{ width: '200px', height: '30px' }} className='prom' type="text" placeholder="decryption" onChange={(e) => setDecryptionKey(e.target.value)} />
      <input style={{ width: '200px', height: '30px' }} className='prom' type="text" placeholder="cipher" onChange={(e) => setCipher(e.target.value)} />
      <button style={{ width: '200px', height: '40px' , marginRight: '10px'}} onClick={decrypt}> Decrypt </button>

    </div>

  );
}

export default KeplerStorageComponent;