import { DateTime } from "luxon";
import "./News.scss";

export type NewsType = {
    title: string;
    content: React.ReactNode;
    date: DateTime;
};

interface Props {
    news: NewsType[];
}

function OneNews({ title, content, date }: NewsType) {
    return (
        <div className="one-news">
            <div className="heading">
                <h2>{title}</h2>
                <p className="date">
                    {date.toLocaleString(DateTime.DATE_FULL)}
                </p>
            </div>
            <div className="content">{content}</div>
        </div>
    );
}

function News({ news }: Props) {
    const renderNews = () =>
        news.map(news => {
            return <OneNews {...news} key={news.date.toLocaleString()} />;
        });

    return <div className="news">{renderNews()}</div>;
}

export default News;
