import React, { useState } from 'react';
import { CheckCircle, ChevronRight, ChevronLeft, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MAIN_GOALS = [
  'Fat Loss & Body Transformation',
  'Muscle Building & Strength',
  'Hybrid Performance',
  'HYROX Preparation',
  'Running Performance',
  'Athletic Development',
  'Mobility & Recovery',
] as const;

const SECONDARY_GOALS = [
  'Fat loss',
  'Build muscle',
  'Improve strength',
  'Improve endurance',
  'Improve running',
  'Prepare for an event',
  'Improve mobility',
  'No other goal',
] as const;

const EQUIPMENT_OPTIONS = [
  'Full gym',
  'Dumbbells / kettlebells',
  'Barbell and weights',
  'Treadmill / running track',
  'Home equipment',
  'Bodyweight only',
] as const;

type FormState = {
  fullName: string;
  email: string;
  age: string;
  countryTimezone: string;
  contactMethod: 'WhatsApp' | 'Email' | '';

  mainGoal: string;
  eventOrDistance: string;
  secondaryGoals: string[];
  mainTarget: string;
  hasTargetDate: 'yes' | 'no' | '';
  targetDate: string;

  experience: 'Beginner' | 'Intermediate' | 'Advanced' | '';
  trainingLocation: 'Gym' | 'Home' | 'Outdoors' | 'Combination' | '';
  daysPerWeek: string;
  sessionLength: string;
  equipment: string[];

  hasInjury: 'no' | 'yes' | '';
  injuryDetails: string;
  hasMedication: 'no' | 'yes' | 'private' | '';
  medicationDetails: string;
  notes: string;
  confirmed: boolean;
};

const initialState: FormState = {
  fullName: '',
  email: '',
  age: '',
  countryTimezone: '',
  contactMethod: '',
  mainGoal: '',
  eventOrDistance: '',
  secondaryGoals: [],
  mainTarget: '',
  hasTargetDate: '',
  targetDate: '',
  experience: '',
  trainingLocation: '',
  daysPerWeek: '',
  sessionLength: '',
  equipment: [],
  hasInjury: '',
  injuryDetails: '',
  hasMedication: '',
  medicationDetails: '',
  notes: '',
  confirmed: false,
};

const PHASES = ['Basic Information', 'Your Goals', 'Training Setup', 'Health & Readiness'];

const SelectButton: React.FC<{
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ active, onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-3 py-3 text-sm font-bold uppercase tracking-wide border-2 transition-all duration-200 text-left break-words ${
      active
        ? 'bg-hyrox-500 border-hyrox-500 text-black'
        : 'border-white/15 text-white/70 hover:border-white/40 hover:text-white'
    }`}
  >
    {children}
  </button>
);

const FieldLabel: React.FC<{ required?: boolean; children: React.ReactNode }> = ({ required, children }) => (
  <label className="block text-white font-bold uppercase tracking-wide text-sm mb-3">
    {children}
    {required && <span className="text-hyrox-500 ml-1">*</span>}
    {!required && <span className="text-white/40 ml-2 normal-case tracking-normal font-normal">(optional)</span>}
  </label>
);

const inputClass =
  'w-full bg-black border-2 border-white/15 px-4 py-3 text-white focus:outline-none focus:border-hyrox-500 transition-all duration-300';

const Apply: React.FC = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const toggleInArray = (key: 'secondaryGoals' | 'equipment', value: string) => {
    setForm((f) => {
      const list = f[key];
      const next = list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
      return { ...f, [key]: next };
    });
  };

  const showEventQuestion = form.mainGoal === 'HYROX Preparation' || form.mainGoal === 'Running Performance';

  const validateStep = (): boolean => {
    if (step === 0) {
      if (!form.fullName || !form.email || !form.age || !form.countryTimezone || !form.contactMethod) {
        setError('Please fill in all required fields.');
        return false;
      }
    }
    if (step === 1) {
      if (!form.mainGoal || !form.mainTarget || !form.hasTargetDate) {
        setError('Please fill in all required fields.');
        return false;
      }
      if (form.hasTargetDate === 'yes' && !form.targetDate) {
        setError('Please share your target date or event.');
        return false;
      }
    }
    if (step === 2) {
      if (!form.experience || !form.trainingLocation || !form.daysPerWeek || !form.sessionLength) {
        setError('Please fill in all required fields.');
        return false;
      }
    }
    if (step === 3) {
      if (!form.hasInjury || !form.hasMedication) {
        setError('Please answer both health questions.');
        return false;
      }
      if (form.hasInjury === 'yes' && !form.injuryDetails) {
        setError('Please briefly explain your injury or condition.');
        return false;
      }
      if (form.hasMedication === 'yes' && !form.medicationDetails) {
        setError('Please briefly explain your medication or restriction.');
        return false;
      }
      if (!form.confirmed) {
        setError('Please confirm the information you provided is accurate.');
        return false;
      }
    }
    setError('');
    return true;
  };

  const handleNext = () => {
    if (!validateStep()) return;
    setStep((s) => Math.min(s + 1, PHASES.length - 1));
  };

  const handleBack = () => {
    setError('');
    setStep((s) => Math.max(s - 1, 0));
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;

    const fields: Record<string, string> = { 'form-name': 'coaching-application' };
    for (const [key, value] of Object.entries(form)) {
      fields[key] = Array.isArray(value) ? value.join(', ') : String(value);
    }

    setSubmitting(true);
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(fields).toString(),
      });
      if (!res.ok) throw new Error(`Submission failed (${res.status})`);
      setSubmitted(true);
    } catch {
      setError('Something went wrong sending your application. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-black text-white min-h-screen">
        <Header />
        <div className="min-h-screen flex items-center justify-center px-4 pt-24">
          <div className="max-w-xl w-full text-center border-2 border-hyrox-500 p-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-hyrox-500 mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-display text-white mb-4">
              Thank You for Applying for<br />Althaf Emir Online Coaching
            </h1>
            <p className="text-white/70 leading-relaxed">
              Your answers have been received. Your coach will review your goals and training details
              and contact you about the next steps.
            </p>
            <a
              href="/"
              className="inline-block mt-8 bg-hyrox-500 text-black px-8 py-3 font-bold uppercase tracking-wide hover:bg-hyrox-600 transition-all duration-300"
            >
              Back to Home
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      <div className="max-w-3xl mx-auto px-4 pt-28 pb-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-hyrox-500/20 border border-hyrox-500/30 px-4 py-2 text-hyrox-400 text-sm font-bold uppercase tracking-widest mb-6">
            <Zap className="w-4 h-4" />
            Coaching Application
          </div>
          <h1 className="text-4xl md:text-5xl font-display text-white mb-4">
            Apply for <span className="text-hyrox-500">Coaching</span>
          </h1>
          <p className="text-white/70">Let's build your plan. This takes about 3 minutes.</p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center mb-12">
          {PHASES.map((phase, i) => (
            <React.Fragment key={phase}>
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className={`w-10 h-10 flex items-center justify-center font-display text-lg border-2 ${
                    i <= step ? 'bg-hyrox-500 border-hyrox-500 text-black' : 'border-white/20 text-white/40'
                  }`}
                >
                  {i + 1}
                </div>
                <span
                  className={`mt-2 text-[10px] uppercase tracking-wide text-center max-w-[80px] ${
                    i <= step ? 'text-white' : 'text-white/40'
                  }`}
                >
                  {phase}
                </span>
              </div>
              {i < PHASES.length - 1 && (
                <div className={`flex-1 h-0.5 mx-1 -mt-5 ${i < step ? 'bg-hyrox-500' : 'bg-white/15'}`} />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="border-2 border-white/10 p-8 space-y-8">
          {/* Phase 1 */}
          {step === 0 && (
            <>
              <h2 className="text-2xl font-display text-white mb-2">Basic Information</h2>
              <p className="text-white/50 -mt-6 mb-6 italic">Let's get to know you.</p>

              <div>
                <FieldLabel required>Full Name</FieldLabel>
                <input
                  type="text"
                  className={inputClass}
                  value={form.fullName}
                  onChange={(e) => set('fullName', e.target.value)}
                  placeholder="Your full name"
                />
              </div>

              <div>
                <FieldLabel required>Email Address</FieldLabel>
                <input
                  type="email"
                  className={inputClass}
                  value={form.email}
                  onChange={(e) => set('email', e.target.value)}
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <FieldLabel required>Age</FieldLabel>
                <input
                  type="number"
                  min={0}
                  className={inputClass}
                  value={form.age}
                  onChange={(e) => set('age', e.target.value)}
                  placeholder="Your age"
                />
              </div>

              <div>
                <FieldLabel required>Country / Time Zone</FieldLabel>
                <input
                  type="text"
                  className={inputClass}
                  value={form.countryTimezone}
                  onChange={(e) => set('countryTimezone', e.target.value)}
                  placeholder="e.g. UAE (GST)"
                />
              </div>

              <div>
                <FieldLabel required>What is your preferred contact method?</FieldLabel>
                <div className="grid grid-cols-2 gap-3">
                  {(['WhatsApp', 'Email'] as const).map((opt) => (
                    <SelectButton key={opt} active={form.contactMethod === opt} onClick={() => set('contactMethod', opt)}>
                      {opt}
                    </SelectButton>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Phase 2 */}
          {step === 1 && (
            <>
              <h2 className="text-2xl font-display text-white mb-2">Your Goals</h2>
              <p className="text-white/50 -mt-6 mb-6 italic">What do you want to achieve?</p>

              <div>
                <FieldLabel required>What is your main goal?</FieldLabel>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {MAIN_GOALS.map((goal) => (
                    <SelectButton key={goal} active={form.mainGoal === goal} onClick={() => set('mainGoal', goal)}>
                      {goal}
                    </SelectButton>
                  ))}
                </div>
              </div>

              {showEventQuestion && (
                <div>
                  <FieldLabel>Which event or distance are you preparing for?</FieldLabel>
                  <input
                    type="text"
                    className={inputClass}
                    value={form.eventOrDistance}
                    onChange={(e) => set('eventOrDistance', e.target.value)}
                    placeholder="e.g. HYROX Open, 5K, 10K, half marathon"
                  />
                </div>
              )}

              <div>
                <FieldLabel>Do you have another goal you want to work on?</FieldLabel>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {SECONDARY_GOALS.map((goal) => (
                    <SelectButton
                      key={goal}
                      active={form.secondaryGoals.includes(goal)}
                      onClick={() => toggleInArray('secondaryGoals', goal)}
                    >
                      {goal}
                    </SelectButton>
                  ))}
                </div>
              </div>

              <div>
                <FieldLabel required>What is your main target?</FieldLabel>
                <p className="text-white/40 text-sm mb-2 -mt-2">Example: Lose 5 kg, run a 10K, build strength, or prepare for a HYROX event.</p>
                <input
                  type="text"
                  className={inputClass}
                  value={form.mainTarget}
                  onChange={(e) => set('mainTarget', e.target.value)}
                  placeholder="Your main target"
                />
              </div>

              <div>
                <FieldLabel required>Do you have a target date or event?</FieldLabel>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <SelectButton active={form.hasTargetDate === 'yes'} onClick={() => set('hasTargetDate', 'yes')}>
                    Yes
                  </SelectButton>
                  <SelectButton active={form.hasTargetDate === 'no'} onClick={() => set('hasTargetDate', 'no')}>
                    No
                  </SelectButton>
                </div>
                {form.hasTargetDate === 'yes' && (
                  <input
                    type="text"
                    className={inputClass}
                    value={form.targetDate}
                    onChange={(e) => set('targetDate', e.target.value)}
                    placeholder="Date / event name"
                  />
                )}
              </div>
            </>
          )}

          {/* Phase 3 */}
          {step === 2 && (
            <>
              <h2 className="text-2xl font-display text-white mb-2">Your Training Setup</h2>
              <p className="text-white/50 -mt-6 mb-6 italic">Let's understand your routine.</p>

              <div>
                <FieldLabel required>What is your current training experience?</FieldLabel>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(['Beginner', 'Intermediate', 'Advanced'] as const).map((opt) => (
                    <SelectButton key={opt} active={form.experience === opt} onClick={() => set('experience', opt)}>
                      {opt}
                    </SelectButton>
                  ))}
                </div>
              </div>

              <div>
                <FieldLabel required>Where will you train?</FieldLabel>
                <div className="grid grid-cols-2 gap-3">
                  {(['Gym', 'Home', 'Outdoors', 'Combination'] as const).map((opt) => (
                    <SelectButton key={opt} active={form.trainingLocation === opt} onClick={() => set('trainingLocation', opt)}>
                      {opt}
                    </SelectButton>
                  ))}
                </div>
              </div>

              <div>
                <FieldLabel required>How many days per week can you train?</FieldLabel>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {['2 days', '3 days', '4 days', '5 days', '6+ days'].map((opt) => (
                    <SelectButton key={opt} active={form.daysPerWeek === opt} onClick={() => set('daysPerWeek', opt)}>
                      {opt}
                    </SelectButton>
                  ))}
                </div>
              </div>

              <div>
                <FieldLabel required>How much time can you usually train per session?</FieldLabel>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['30 minutes', '45 minutes', '60 minutes', '60+ minutes'].map((opt) => (
                    <SelectButton key={opt} active={form.sessionLength === opt} onClick={() => set('sessionLength', opt)}>
                      {opt}
                    </SelectButton>
                  ))}
                </div>
              </div>

              <div>
                <FieldLabel>What equipment do you have access to?</FieldLabel>
                <div className="grid grid-cols-2 gap-3">
                  {EQUIPMENT_OPTIONS.map((opt) => (
                    <SelectButton
                      key={opt}
                      active={form.equipment.includes(opt)}
                      onClick={() => toggleInArray('equipment', opt)}
                    >
                      {opt}
                    </SelectButton>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Phase 4 */}
          {step === 3 && (
            <>
              <h2 className="text-2xl font-display text-white mb-2">Health & Readiness</h2>
              <p className="text-white/50 -mt-6 mb-6 italic">Help us make your training appropriate for you.</p>

              <div>
                <FieldLabel required>Do you currently have an injury, pain, or medical condition that may affect exercise?</FieldLabel>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <SelectButton active={form.hasInjury === 'no'} onClick={() => set('hasInjury', 'no')}>No</SelectButton>
                  <SelectButton active={form.hasInjury === 'yes'} onClick={() => set('hasInjury', 'yes')}>Yes</SelectButton>
                </div>
                {form.hasInjury === 'yes' && (
                  <textarea
                    rows={3}
                    className={`${inputClass} resize-none`}
                    value={form.injuryDetails}
                    onChange={(e) => set('injuryDetails', e.target.value)}
                    placeholder="Please briefly explain"
                  />
                )}
              </div>

              <div>
                <FieldLabel required>Are you currently taking any medication or following any medical restrictions that may affect training?</FieldLabel>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                  <SelectButton active={form.hasMedication === 'no'} onClick={() => set('hasMedication', 'no')}>No</SelectButton>
                  <SelectButton active={form.hasMedication === 'yes'} onClick={() => set('hasMedication', 'yes')}>Yes</SelectButton>
                  <SelectButton active={form.hasMedication === 'private'} onClick={() => set('hasMedication', 'private')}>
                    Prefer to discuss privately
                  </SelectButton>
                </div>
                {form.hasMedication === 'yes' && (
                  <textarea
                    rows={3}
                    className={`${inputClass} resize-none`}
                    value={form.medicationDetails}
                    onChange={(e) => set('medicationDetails', e.target.value)}
                    placeholder="Please briefly explain"
                  />
                )}
              </div>

              <div>
                <FieldLabel>Anything else your coach should know before creating your plan?</FieldLabel>
                <p className="text-white/40 text-sm mb-2 -mt-2">Example: shift work, exercise preferences, previous training experience, or a specific concern.</p>
                <textarea
                  rows={3}
                  className={`${inputClass} resize-none`}
                  value={form.notes}
                  onChange={(e) => set('notes', e.target.value)}
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-1 w-5 h-5 accent-hyrox-500 flex-shrink-0"
                  checked={form.confirmed}
                  onChange={(e) => set('confirmed', e.target.checked)}
                />
                <span className="text-white/80 text-sm leading-relaxed">
                  I confirm that the information I provided is accurate. I understand that I should consult an
                  appropriate healthcare professional about medical concerns or exercise restrictions before
                  starting training.
                  <span className="text-hyrox-500 ml-1">*</span>
                </span>
              </label>
            </>
          )}

          {error && (
            <div className="border-2 border-hyrox-500 bg-hyrox-500/10 text-hyrox-400 px-4 py-3 text-sm font-semibold">
              {error}
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between pt-4">
            <button
              type="button"
              onClick={handleBack}
              disabled={step === 0}
              className="flex items-center gap-2 px-6 py-3 font-bold uppercase tracking-wide text-sm border-2 border-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:border-white/40 transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </button>

            {step < PHASES.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-2 bg-hyrox-500 text-black px-8 py-3 font-bold uppercase tracking-wide text-sm hover:bg-hyrox-600 transition-all duration-300"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting}
                className="flex items-center gap-2 bg-hyrox-500 text-black px-8 py-3 font-bold uppercase tracking-wide text-sm hover:bg-hyrox-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Sending...' : 'Submit Application'}
                <CheckCircle className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Apply;
