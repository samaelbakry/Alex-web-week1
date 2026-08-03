export default function Button({
  btnStyle,
  fn,
  btnType,
  loading,
  item,
  btnText,
  loadingText,
}) {
  const style = {
    loginSubmition:
      "bg-blue-600 rounded-xl shadow text-white px-5 py-2 self-end cursor-pointer mt-3",
    addToCart:
      "px-6 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm rounded-xl shadow-sm transition-colors focus:ring-2 focus:ring-blue-500/20",
    addToWishlist:
      "px-6 py-3 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold text-sm rounded-xl shadow-sm transition-colors focus:ring-2 focus:ring-green-500/20",
  };
  return (
    <button
      type={btnType}
      className={style[btnStyle]}
      disabled={loading ? loading : ""}
      onClick={item ? () => fn(item) : fn}
    >
      {loading && <>{loading ? loadingText : btnText}</>}
      {!loading && btnText}
    </button>
  );
}
