import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();

  return (
    <div>
      <h3>Blog Post #{id}</h3>
      <p>This is the content for blog post {id}.</p>
    </div>
  );
}