"use client";
import { SSX } from "@spruceid/ssx";
import { useEffect, useState } from "react";
import "./myStyle.css";

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

  const handlePostContent = async (key: string, value: string) => {
    if (!key || !value) {
      alert('Invalid key or value');
      return;
    }
    const formatedKey = 'content/' + key.replace(/\ /g, '_');
    setLoading(true);
    await ssx.storage.put(formatedKey, value);
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
  const [website, setWebsite] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [notes, setNotes] = useState("")
 
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

      <div className='website distance'>
          <label className='larger-label' htmlFor="username">Website </label>
          <input style={{ width: '200px', height: '30px'}} className='prom'  type="text" placeholder="example.com" onChange={(e) => setWebsite(e.target.value)} />
      </div>

      <div className='username distance'>
          <label className='larger-label' htmlFor="username">Username </label>
          <input style={{ width: '200px', height: '30px' }} className='prom'  type="text" placeholder="example.com" onChange={(e) => setUsername(e.target.value)} />
      </div>

      <div className='pass distance'>
          <label className='larger-label' htmlFor="username">Password </label>
          <input style={{ width: '200px', height: '30px' }} className='prom' type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
      </div>

      <div className='notes distance'>
          <label className='larger-label' htmlFor="username">Notes </label>
          <input style={{ width: '200px', height: '30px' }} className='prom' type="text" placeholder="Add notes" onChange={(e) => setNotes(e.target.value)} />
      </div>
    


      <input style={{ width: '300px', height: '40px' , marginRight: '10px'}}  type="text" placeholder="Value" value={value} onChange={(e) => setValue(e.target.value)} disabled={loading} />
      <br />

      <button style={{ width: '200px', height: '40px' , marginRight: '10px'}}  onClick={() => handlePostContent(key, value)} disabled={loading} > <span> Submit </span> </button>
    
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
    </div>
  );
}

export default KeplerStorageComponent;