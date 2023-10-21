

export default function Start() {
    return (
      <>
        <div id="sidebar">
          <h1>What is your favorite dog?</h1>
          <div>
            <form id="user-input" role="input">
              <input
                id="q"
                aria-label="Buzz feed input"
                placeholder="Type your answer here!"
                type="input"
                name="q"
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div id="detail"></div>
      </>
    );
  }