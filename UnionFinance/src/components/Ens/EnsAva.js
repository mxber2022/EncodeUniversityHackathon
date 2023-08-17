import { useAccount, useConnect, useEnsAvatar } from 'wagmi';

function EnsAva() {
    const { address, isConnected } = useAccount();

    const { data, isError, isLoading } = useEnsAvatar({
      name: 'jxom.eth',
    })
   
    if (isLoading) return <div>Fetching avatar…</div>
    if (isError) return <div>Error fetching avatar</div>
    return <><div><h2>ENS Avatar</h2><img src={data} width={50} ></img></div></>
  }

export default EnsAva;