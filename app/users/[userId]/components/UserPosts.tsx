type Props = {
  promise: Promise<Post[]>;
};
const UserPosts = async ({ promise }: Props) => {
  const posts = await promise;

  const content = posts.map((item, index) => (
    <article key={index}>
      <h2>{item.title}</h2>
      <p>{item.body}</p>
      <br />
    </article>
  ));
  return content;
};

export default UserPosts;
