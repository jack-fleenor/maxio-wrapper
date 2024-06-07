export type LiveState = 'active' | 'assessing' | 'pending' | 'trialing' | 'paused';
export type ProblemState = 'past_due' | 'soft_failure' | 'unpaid';
export type EndOfLifeState = 'canceled' | 'expired' | 'failed_to_create' | 'on_hold' | 'suspended' | 'trial_ended';
export type PaymentCollectionMethod = 'invoice' | 'automatic' | 'remittance' | 'prepaid';


export type Subscription = {
    id: number;
    state: LiveState | ProblemState | EndOfLifeState | 'awaiting_signup';
    balance_in_cents: number;
    total_revenue_in_cents: number;
    product_price_in_cents: number;
    product_version_number: number;
    current_period_ends_at: string;
    next_assessment_at: string | null;
    trial_started_at: string | null;
    trial_ended_at: string | null;
    activated_at: string | null;
    expires_at: string | null;
    created_at: string | null;
    updated_at: string | null;
    cancellation_method: string | null;
    cancel_at_end_of_period: boolean | null;
    canceled_at: string | null;
    current_period_started_at: string | null;
    previous_state: LiveState | ProblemState | EndOfLifeState | 'awaiting_signup'
    signup_payment_id: number | null;
    signup_revenue: string | null;
    delayed_cancel_at: string | null;
    coupon_code: string | null; // deprecated
    snap_day: string | null;
    payment_collection_method: PaymentCollectionMethod;
}
