import { describe, it, expect } from 'vitest';
import { CASE_BANK, SCORING } from '../data/caseBank';

describe('Case Data Validation', () => {

    describe('Case Bank Structure', () => {
        it('has at least 5 cases', () => {
            expect(CASE_BANK.length).toBeGreaterThanOrEqual(5);
        });

        it('all cases have required fields', () => {
            CASE_BANK.forEach((c, idx) => {
                expect(c.id, `Case ${idx} missing id`).toBeDefined();
                expect(c.difficulty, `Case ${c.id} missing difficulty`).toBeDefined();
                expect(c.setting, `Case ${c.id} missing setting`).toBeDefined();
                // expect(c.chief_quote, `Case ${c.id} missing chief_quote`).toBeDefined(); // Moved to bio
                // expect(c.quick_facts, `Case ${c.id} missing quick_facts`).toBeDefined(); // Moved to dating_profile
                // expect(c.nutrition_focus, `Case ${c.id} missing nutrition_focus`).toBeDefined(); // Hidden
                expect(c.dating_profile, `Case ${c.id} missing dating_profile`).toBeDefined();
                expect(c.dating_profile.username, `Case ${c.id} missing username`).toBeDefined();
                expect(c.dating_profile.tagline, `Case ${c.id} missing tagline`).toBeDefined();
                expect(c.dating_profile.bio, `Case ${c.id} missing bio`).toBeDefined();
                expect(c.dating_profile.looking_for, `Case ${c.id} missing looking_for`).toBeDefined();
                expect(c.dating_profile.baggage, `Case ${c.id} missing baggage`).toBeDefined();
                expect(c.dating_profile.icf_tags, `Case ${c.id} missing icf_tags`).toBeDefined();

                expect(c.correct_swipe, `Case ${c.id} missing correct_swipe`).toBeDefined();
                expect(c.reveal, `Case ${c.id} missing reveal`).toBeDefined();
            });
        });

        it('all correct_swipe values are valid', () => {
            const validSwipes = ['RIGHT_PT', 'LEFT_REFER', 'LEFT_911'];
            CASE_BANK.forEach((c) => {
                expect(validSwipes).toContain(c.correct_swipe);
            });
        });

        it('reveal objects have required fields', () => {
            CASE_BANK.forEach((c) => {
                expect(c.reveal.best_answer_rationale, `Case ${c.id} reveal missing rationale`).toBeDefined();
                expect(c.reveal.key_red_flags, `Case ${c.id} reveal missing red_flags`).toBeDefined();
                expect(c.reveal.scope_boundary, `Case ${c.id} reveal missing scope_boundary`).toBeDefined();
            });
        });
    });

    describe('Sorting Items Validation', () => {
        it('cases with sorting_items have valid structure', () => {
            const sortingCases = CASE_BANK.filter(c => c.sorting_items);

            expect(sortingCases.length).toBeGreaterThan(0);

            sortingCases.forEach((c) => {
                c.sorting_items.forEach((item, idx) => {
                    expect(item.id, `Case ${c.id} sorting item ${idx} missing id`).toBeDefined();
                    expect(item.text, `Case ${c.id} sorting item ${idx} missing text`).toBeDefined();
                    expect(item.bucket, `Case ${c.id} sorting item ${idx} missing bucket`).toBeDefined();
                    expect(['TREAT', 'REFER']).toContain(item.bucket);
                });
            });
        });
    });

    describe('Scaffolding Validation', () => {
        it('cases with scaffolding have level2 data', () => {
            const scaffoldCases = CASE_BANK.filter(c => c.scaffolding);

            expect(scaffoldCases.length).toBeGreaterThan(0);

            scaffoldCases.forEach((c) => {
                expect(c.scaffolding.level2, `Case ${c.id} missing level2 scaffolding`).toBeDefined();
                expect(c.scaffolding.level2.question || c.scaffolding.level2.update,
                    `Case ${c.id} level2 missing question/update`).toBeDefined();
                expect(c.scaffolding.level2.options, `Case ${c.id} level2 missing options`).toBeDefined();
                expect(c.scaffolding.level2.options.length).toBeGreaterThan(0);
            });
        });

        it('scaffolding options have correct structure', () => {
            const scaffoldCases = CASE_BANK.filter(c => c.scaffolding);

            scaffoldCases.forEach((c) => {
                c.scaffolding.level2.options.forEach((opt, idx) => {
                    expect(opt.text, `Case ${c.id} level2 option ${idx} missing text`).toBeDefined();
                    expect(typeof opt.correct).toBe('boolean');
                    expect(opt.feedback, `Case ${c.id} level2 option ${idx} missing feedback`).toBeDefined();
                });
            });
        });

        it('each scaffolding has exactly one correct option per level', () => {
            const scaffoldCases = CASE_BANK.filter(c => c.scaffolding);

            scaffoldCases.forEach((c) => {
                const level2CorrectCount = c.scaffolding.level2.options.filter(o => o.correct).length;
                expect(level2CorrectCount, `Case ${c.id} level2 should have exactly 1 correct option`).toBe(1);

                if (c.scaffolding.level3) {
                    const level3CorrectCount = c.scaffolding.level3.options.filter(o => o.correct).length;
                    expect(level3CorrectCount, `Case ${c.id} level3 should have exactly 1 correct option`).toBe(1);
                }
            });
        });
    });

    describe('Scoring Validation', () => {
        it('scoring keys match case IDs', () => {
            const caseIds = CASE_BANK.map(c => c.id).sort();
            const scoreIds = Object.keys(SCORING).sort();
            expect(scoreIds).toEqual(caseIds);
        });
    });

});
