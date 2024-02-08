

import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import useAuth from '../Hooks/useAuth/useAuth'

const Support = () => {
  const { user } = useAuth()
  const { roomId } = useParams()
  const myMetting = async (element) => {
    const appID = 2089442467
    const serverSecret = '68df809278e343d787ff0cbdbf89d943'
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      'israil'
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Copy Link',
          url: `http://loaclhoast:5173/room/${roomId}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
      showScreenSharingButton: true,
    });
  };
  return (
    <div>
      <dev ref={myMetting} />
    </div>
  );
}

export default Support;
