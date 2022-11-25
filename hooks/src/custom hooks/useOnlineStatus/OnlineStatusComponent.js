import useOnlineStatus from "./useOnlineStatus"
// checks if user is on or offline. Can emulate being offline in 
// developer tools-network

export default function OnlineStatusComponent() {
  const online = useOnlineStatus()

  return <div>{online.toString()}</div>
}