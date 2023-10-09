const generateStaticParams = async () => {
  const res = await client.getEntries({ content_type: "aktualnosci" });

  const params = res.items.map((item) => {
    return { slug: item.fields.slug ? item.fields.slug : "" };
  });

  return {
    params,
  };
};

export default generateStaticParams;
