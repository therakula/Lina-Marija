import axios from "axios";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { token } = data;

  const secretKey: string | undefined = process.env.RECAPTCHA_SECRET_KEY;

  if (!token) {
    console.log("Token not found");
    return NextResponse.json(
      { message: "Token not found" },
      {
        status: 400
      }
    );
  }

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`
    );

    console.log("response", response.data);
    if (response.data.success) {
      return NextResponse.json(
        { message: "Success", success: true },
        {
          status: 200
        }
      );
    } else {
      return NextResponse.json(
        { message: "Failed to verify!!" },
        {
          status: 403
        }
      );
    }
  } catch (error) {
    console.log("ERROR: ", error);
    return NextResponse.json(
      { message: `Internal Server Error\n ${error}` },
      {
        status: 500
      }
    );
  }
}
