export interface ResponseDataType {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

export interface CardProps {
  id: number;
  title: string;
  date?: string;
  explanation?: string;
  url: string;
}
