-- Insert sample ticket data (references customers table via customer_id foreign key)
INSERT INTO tickets (customer_id, title, description, completed, tech, created_at, updated_at) VALUES
-- John Smith's tickets (customer_id: 1)
(1, 'Email Configuration Issue', 'John Smith unable to receive emails on new iPhone. Outlook configuration needs to be updated with proper IMAP settings for his business account.', false, 'unassigned', '2024-03-15 10:30:00', '2024-03-15 10:30:00'),
(1, 'Printer Setup Help', 'John needs help connecting his home office HP printer to the new WiFi network after router replacement.', true, 'Mike Johnson', '2024-02-20 11:00:00', '2024-02-21 13:30:00'),

-- Sarah Johnson's tickets (customer_id: 2) - VIP customer
(2, 'VIP: Network Performance Issue', 'Sarah Johnson (VIP) reporting slow internet speeds at her LA office. Priority investigation needed for business operations.', true, 'Alex Rodriguez', '2024-03-08 14:15:00', '2024-03-09 16:45:00'),
(2, 'Cloud Backup Configuration', 'VIP customer needs secure cloud backup solution configured for her real estate business files.', false, 'Sarah Chen', '2024-03-22 09:20:00', '2024-03-22 09:20:00'),

-- Michael Brown's tickets (customer_id: 3) - Corporate account
(3, 'Software Installation Request', 'Michael Brown from corporate account needs assistance installing new accounting software on multiple workstations.', false, 'Sarah Chen', '2024-03-18 09:20:00', '2024-03-18 09:20:00'),
(3, 'Server Migration Planning', 'Corporate client needs consultation on migrating their Chicago office servers to new data center.', false, 'Alex Rodriguez', '2024-03-23 10:15:00', '2024-03-23 10:15:00'),

-- Emma Davis's tickets (customer_id: 4) - Corporate account manager
(4, 'Multi-User License Setup', 'Emma Davis needs help configuring software licenses for her team of 15 employees across different departments.', true, 'Mike Johnson', '2024-03-20 08:45:00', '2024-03-20 15:30:00'),

-- Robert Wilson's tickets (customer_id: 5) - Seasonal customer (inactive)
(5, 'Seasonal Account Reactivation', 'Robert Wilson requesting reactivation of services for winter season. Need to restore previous configuration.', false, 'unassigned', '2024-03-01 16:30:00', '2024-03-01 16:30:00'),

-- Jessica Miller's tickets (customer_id: 6) - Bulk order customer
(6, 'Bulk Order Processing System', 'Jessica Miller needs custom solution for processing large inventory orders with 48-hour turnaround requirement.', false, 'Sarah Chen', '2024-03-25 13:10:00', '2024-03-25 13:10:00'),

-- David Garcia's tickets (customer_id: 7) - Spanish-speaking customer
(7, 'Bilingual Support Request', 'David Garcia needs technical documentation translated to Spanish for his San Antonio team training.', true, 'Maria Gonzalez', '2024-03-14 15:20:00', '2024-03-16 11:45:00');