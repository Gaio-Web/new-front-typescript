const [offerPreview, setOfferPreview] = useState<string>('');
// Handles input change event and updates state
const handleOfferChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setOffer(event.target.files?.[0]);

  const fileImage = event.target.files?.[0];
  if (!fileImage) {
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    setOfferPreview(reader.result as string);
  };
  reader.readAsDataURL(fileImage);
};

const [offerPercent, setOfferPercent] = useState(0);

const handleOfferUploadToFirebase = () => {
  if (!offer) {
    alert('escolha uma imagem!');
  }
  const storageRef = ref(storage, `/${id}/${offer.name}`);
  const uploadTask = uploadBytesResumable(storageRef, offer);

  uploadTask.on(
    'state_changed',
    (snapshot) => {
      const offerPercent = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      // update progress
      setOfferPercent(offerPercent);
    },
    (err) => console.log(err),
    () => {
      //download URL
      getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
        console.log(url);
        const body = JSON.stringify({
          phone: id,
          photo_position: '3',
          base64: url,
          type: 'image',
        });
        const response = await fetch(
          'https://gaio-web-new-api-test.onrender.com/upload',
          {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
            body: body,
          }
        );
        if (response.ok) {
          // A resposta foi bem-sucedida
          setUploaded(true),
          toast.success('Imagem enviada com sucesso!', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        } else {
          // A resposta foi mal-sucedida
          console.log('Houve um problema ao enviar a foto.');
          toast.error('Houve um problema ao enviar a imagem!', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        }
      });
    }
  );
};
