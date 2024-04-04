import data from "../../../public/data.json";

export async function GET() {
    return Response.json(data);
}