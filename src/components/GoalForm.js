const GoalForm = (props) => {
  return (
    <section>
      <h2>Set a new goal you want to achieve</h2>
      <form>
        <label htmlFor="goal">Enter a goal</label>
        <input id="goal" type="text" />
        <button>Add Goal</button>
      </form>
    </section>
  );
};

export default GoalForm;
