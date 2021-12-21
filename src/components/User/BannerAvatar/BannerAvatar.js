import React, {useState}from 'react'
import { Button } from "react-bootstrap";
import ConfigModal from "../../Modal/ConfigModal";
import AvatarNoFound from "../../../assets/png/avatar-no-found.png";
import { API_HOST } from "../../../utils/constant";


import "./BannerAvatar.scss"

export default function BannerAvatar(props) {

  console.log(props)
  
  const { user , loggedUser } = props;
  const [showModal, setshowModal] = useState(false)
  const bannerUrl = user?.banner
      ? `${API_HOST}/obtenerBanner?id=${user.id}`
      : null;

    const avatarUrl = user?.avatar
      ? `${API_HOST}/obtenerAvatar?id=${user.id}`
      : AvatarNoFound;

  
  
  return (
    <div className="banner-avatar" style={ {backgroundImage: `url('${bannerUrl}')`}}>
    <div className="avatar" style={ {backgroundImage: `url('${avatarUrl}')`}} />
    {user && (
      <div className="options">
        {loggedUser._id === user.id && <Button onClick={() => setshowModal(true)}>Editar Perfil</Button>}        
        {loggedUser._id !== user.id && <Button>Seguir</Button>}
      </div>
    )}
    <ConfigModal show={showModal} setShow={setshowModal} title="Editar perfil">
       Formulario de edicion...
    </ConfigModal>

    </div>
  )
}


