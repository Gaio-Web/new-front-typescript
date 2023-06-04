import axios from "axios";

type Param = {
  field: string;
  value: string;
}

type Params = Param[];

export const HandleSubmit = async (fields: Params, userID: string) => {

  const phone = userID;

  const body = {
    "phone": userID,
    "fields": fields,
  }

  console.log('mongo: ', body)

  try {
    const response = await fetch(
      `${import.meta.env.VITE_MAIN_API_URL}/updateSections`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      }
    );
    const data = await response.json();
  } catch (err) {
    console.log('error: ', err)
  }

}
