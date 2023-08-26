"use client";
import { SSX } from "@spruceid/ssx";
import { useEffect, useState } from "react";

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
 
  return (
    <div style={{ marginTop: 50 }}>
      <h2>Provide data to encrypt and store in Kepler</h2>
      <input type="text" placeholder="Key" value={key} onChange={(e) => setKey(e.target.value)} disabled={loading} />
      <br />

      <input type="text" placeholder="Value" value={value} onChange={(e) => setValue(e.target.value)} disabled={loading} />
      <br />

      <button onClick={() => handlePostContent(key, value)} disabled={loading} style={{ marginTop: 15 }} > <span> POST </span> </button>
      
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