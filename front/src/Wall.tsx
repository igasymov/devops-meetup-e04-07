import './Wall.css'

// Each issue titled "another brick in the wall #N" adds brick N here.
const bricks: number[] = [3]

function Wall() {
  return (
    <section id="wall" aria-label="The wall">
      <h2>The Wall</h2>
      <div className="wall">
        {bricks.map((n) => (
          <div key={n} className="brick" title={`Brick #${n}`}>
            #{n}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Wall
