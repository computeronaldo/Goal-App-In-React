const GoalForm = (props) => {
  return (
    <section className="w-4/5 max-w-screen-md p-4 mx-auto mt-10 rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 flex flex-col items-center gap-6 font-Raleway">
      <h2>Set a new goal you want to achieve</h2>
      <form className="flex flex-col align-center gap-2 text-center w-3/4">
        <label htmlFor="goal">Let's set some new goals</label>
        <input
          className="p-1"
          id="goal"
          type="text"
          placeholder="Enter a new goal..."
        />
        <button className="bg-purple-600 px-4 py-2 rounded-md mx-auto w-1/3">
          Add Goal
        </button>
      </form>
    </section>
  );
};

export default GoalForm;
