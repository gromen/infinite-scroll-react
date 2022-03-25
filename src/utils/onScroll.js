export const onScroll = ({ currentTarget }, loadMore) => {
  if (currentTarget.scrollTop + currentTarget.clientHeight >= currentTarget.scrollHeight) {
    loadMore();
    // eslint-disable-next-line
    console.log('scrollTop', currentTarget.scrollTop);
  }
};
