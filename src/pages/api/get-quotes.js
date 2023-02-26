import { getXataClient } from "../../xata";

async function handler(req, res) {
   let quotes = []
   const xata = getXataClient();

   // const allQuotes = await xata.db.quotes.filter().getMany();

   const { symptom } = req.body;
   console.log(symptom)

   const goal = await xata.db.self_care.filter({ Goals: symptom }).getFirst();
   console.log(goal)

   const specQuotes = await xata.db.quotes.filter({ self_care_id: goal.id }).getMany();
   console.log(specQuotes)
   res.send(specQuotes);
}

export default handler;