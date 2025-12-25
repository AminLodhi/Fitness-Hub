// Simple plan data and renderer
const planSelect = document.getElementById('plan-select');
const planOutput = document.getElementById('plan-output');

const planData = {
  '1': {
    title: '1 Month — Beginner (habit & foundation)',
    description: 'Focus on habit, mobility, and learning basic movement patterns. 3 workouts/week strength + 2 active recovery/cardio days.',
    weeks: [
      {
        name: 'Week 1',
        bullets: [
          '3 strength sessions (full-body, bodyweight focus)',
          '2 short cardio / mobility sessions (20 min walk or light bike)',
          'Daily: 5–10 min morning mobility and 5–10 min evening stretch'
        ]
      },
      {
        name: 'Week 2',
        bullets: [
          'Same structure; slightly increase intensity or add 1 set per exercise',
          'Try 3 sets × 8–10 reps on main exercises'
        ]
      },
      {
        name: 'Week 3',
        bullets: [
          'Add a short cardio session as intervals (8–12 minutes) once a week',
          'Add 1–2 reps per set if form is solid'
        ]
      },
      {
        name: 'Week 4',
        bullets: [
          'Consolidate: keep consistency; test a small progression (more reps or slightly more time)',
          'Aim for 3 strength sessions and 2 active recovery sessions'
        ]
      }
    ],
    sampleExercises: [
      'Squat (bodyweight or goblet) — 3 sets × 8–12 reps',
      'Push variant (push-up / incline push-up) — 3 × 6–10',
      'Row variation (dumbbell row / inverted row) — 3 × 6–10',
      'Plank — 3 × 20–45s'
    ]
  },
  '2': {
    title: '2 Months — Build habit & capacity',
    description: 'Increase training frequency and introduce more structured sessions: 3–4 strength + 2 cardio/mobility days.',
    weeks: [
      {
        name: 'Weeks 1–2',
        bullets: [
          'Full-body strength 3× per week, 3 sets main lifts, build to 8–12 reps',
          '2 days of 20–30 min cardio or mobility',
        ]
      },
      {
        name: 'Weeks 3–4',
        bullets: [
          'Add a 4th session (split: upper / lower or push/pull)',
          'Start small progressive overload: add weight, reps, or reduce rest by 10–20s'
        ]
      },
      {
        name: 'Weeks 5–8',
        bullets: [
          'Alternate heavier day (6–8 reps) and higher-rep day (10–15 reps)',
          'Include one longer cardio session (30–45 min) weekly'
        ]
      }
    ],
    sampleExercises: [
      'Squat or split squat — 3–4 sets × 6–10 reps',
      'Push (bench / push-up) — 3–4 × 6–10',
      'Pull (rows / pull-ups) — 3–4 × 6–10',
      'Accessory core & mobility — 2–3 × varied'
    ]
  },
  '3': {
    title: '3 Months — Progress & strength',
    description: 'Structured plan with progression phases, 4 strength sessions per week or 3 with higher intensity, plus recovery protocols.',
    weeks: [
      {
        name: 'Months 1 (Weeks 1–4)',
        bullets: [
          'Build volume and technique: 3–4 strength sessions, 2 cardio/mobility days',
          'Focus on movement quality'
        ]
      },
      {
        name: 'Month 2 (Weeks 5–8)',
        bullets: [
          'Increase intensity: heavier sets (4–6 or 6–8) and strength focus for compound lifts',
          'Introduce targeted accessory work for weak points'
        ]
      },
      {
        name: 'Month 3 (Weeks 9–12)',
        bullets: [
          'Peak: mix of heavy sets and higher-rep hypertrophy work',
          'Prioritize recovery—sleep, nutrition, deload week if needed'
        ]
      }
    ],
    sampleExercises: [
      'Compound lift (squat / deadlift / hinge) — 4 sets × 4–8 reps (progressively heavier)',
      'Upper push/pull split — 3–4 sets × 6–10 reps',
      'Accessory & conditioning — 2–4 sets of higher reps or interval work'
    ]
  }
};

function renderPlan(key){
  const plan = planData[key];
  if(!plan) return;
  const el = document.createElement('div');

  const weeksHtml = plan.weeks.map(w => {
    const bullets = w.bullets.map(b => `<li>${b}</li>`).join('');
    return `<div class="week">
      <h4>${w.name}</h4>
      <ul>${bullets}</ul>
    </div>`;
  }).join('');

  const exercises = plan.sampleExercises.map(e => `<li>${e}</li>`).join('');

  el.innerHTML = `
    <h3>${plan.title}</h3>
    <p>${plan.description}</p>
    <div class="weeks">${weeksHtml}</div>
    <h4>Sample daily sets & reps</h4>
    <ul>${exercises}</ul>
    <p class="muted">Tip: start light, focus on form, increase weight or reps gradually. Rest 60–120s on heavy sets; 30–60s on accessory sets.</p>
  `;

  planOutput.innerHTML = '';
  planOutput.appendChild(el);
}

// initial render
renderPlan(planSelect.value);

// event
planSelect.addEventListener('change', (e) => {
  renderPlan(e.target.value);
});
