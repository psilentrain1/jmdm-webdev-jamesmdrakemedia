export function Header() {
  return (
    <section className="fixed h-14 w-full border-solid bg-primary-950 text-primary-50">
      <div className="mx-auto flex w-5/6 flex-row justify-between">
        <div>James M. Drake, Jr.</div>
        <div>
          <ul className="l flex list-none flex-row justify-evenly gap-6 align-middle">
            <li>About</li>
            <li>Credits</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
