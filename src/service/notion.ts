"use server"
import { Client } from '@notionhq/client';
import { NotionGet, PortfolioItem } from "@/types/notion";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = '12d88898e6df80fc997cd204a0701861';

export async function getPortifolio(): Promise<PortfolioItem[]> {
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return response.results.map((post: any) => ({
    Projeto: (post as NotionGet).properties.Projeto.title[0]?.text?.content,
    Capa: (post as NotionGet).properties.Capa.rich_text[0]?.plain_text,
    Foto1: (post as NotionGet).properties.Foto1.rich_text[0]?.plain_text,
    Foto2: (post as NotionGet).properties.Foto2.rich_text[0]?.plain_text,
    Foto3: (post as NotionGet).properties.Foto3.rich_text[0]?.plain_text,
    Descricoes: (post as NotionGet).properties.Descricoes.rich_text[0]?.plain_text,
    Link: (post as NotionGet).properties.Link.rich_text[0]?.plain_text,
    Tech1: (post as NotionGet).properties.Tech1.rich_text[0]?.plain_text,
    Tech2: (post as NotionGet).properties.Tech2.rich_text[0]?.plain_text,
    Tech3: (post as NotionGet).properties.Tech3.rich_text[0]?.plain_text,
    Tech4: (post as NotionGet).properties.Tech4.rich_text[0]?.plain_text,
    Tech5: (post as NotionGet).properties.Tech5.rich_text[0]?.plain_text,
    Tech6: (post as NotionGet).properties.Tech6.rich_text[0]?.plain_text,
    Index: (post as NotionGet).properties.Index.rich_text[0]?.plain_text,
    DescricaoBreve: (post as NotionGet).properties.DescricaoBreve.rich_text[0]?.plain_text,
    Miniatura: (post as NotionGet).properties.Miniatura.rich_text[0]?.plain_text
  }));
}
function getOneFunction(Index: string) {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter:{
      or: [
        {
          property: 'Index',
          contains: Index
        }
      ]
    }
  });

  return (
    <div>notion</div>
  )
}}

export default notion