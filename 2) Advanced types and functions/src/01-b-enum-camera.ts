/*
!libreria CAPACITOR:
https://capacitorjs.com/docs/getting-started/with-ionic
npm install @capacitor/camera
*/

import { Camera, CameraResultType, CameraDirection } from '@capacitor/camera';

const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Base64, //? es un enum. Si voy a definition me va a tirar lo siguiente:
    //     export declare enum CameraResultType {
    //     Uri = "uri",
    //     Base64 = "base64",
    //     DataUrl = "dataUrl"
    // }
    direction: CameraDirection.Front, // asi evitamos asignar variables incorrectas.
  });
};
