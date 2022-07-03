const Statistics = ({ items }) => (
  <section class="statistics">
    <h2 class="title">Upload stats</h2>

    <ul class="stat-list">
      {items.map(item => (
        <li class="item" key={item.id}>
          <span class="label">{item.label}</span>
          <span class="percentage">{item.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Statistics;
